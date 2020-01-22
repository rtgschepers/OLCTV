const dayNames = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
/* DATE TIME FUNCTIONS */
function getDateTime() {
    const monthNames = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

    const now = new Date();
    const time = now.getHours() + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
    const date = dayNames[now.getDay()] + ", " + now.getDate() + " " + monthNames[now.getMonth()] + " " + now.getFullYear();

    $("#time").text(time);
    $("#date").text(date);
}

/* GENERAL FUNCTIONS */
function animateVerScroll(el) {
    el = $(el).parent();
    el.stop();
    el.scrollTop(0);

    function anim() {
        setTimeout(() => {
            const st = el.scrollTop();
            const sb = el.prop("scrollHeight") - el.innerHeight();
            const sc = st < sb / 2 ? sb : 0;

            const speed = st == 0 ? el.height() / 3 : 2;
            const style = st == 0 ? "linear" : "swing";

            el.stop().animate({scrollTop: sc}, speed * 1000, style, anim);
        }, 4000);
    }

    anim();
}
function nextSlide(interval) {
    const slides = $(".slide");
    setTimeout(() => {
        let cur, next;

        $.each(slides, function (key, slide) {
            if (slide.classList.contains("active")) {
                cur = slides.index($(slide));
                if (cur == slides.length - 1) {
                    next = 0;
                } else {
                    next = cur + 1;
                }
            }
        });

        $(slides[cur]).slideUp(1000).removeClass("active");
        $(slides[next]).slideDown(1000).addClass("active");

        // Show the next slide for the amount of time in its property.
        nextSlide(slides[next].dataset.time);
    }, interval * 1000);
}
function request(url, callback) {
    fetch(url).then((resp) => {
        return resp.json();
    }).then(callback).catch((err) => {
        console.error(`Error requesting: ${url}.\n${err.toString()}`);
    });
}

/* NOTIFICATION PANEL FUNCTIONS */
function notificationFlipper() {
    const time = 500;
    if ($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        $(".back").fadeOut(time);
        setTimeout(() => {
            $(".front").fadeIn(time);
        }, time + 1);
    } else {
        $(this).attr('data-click-state', 1);
        $(".front").fadeOut(time);
        setTimeout(() => {
            $(".back").fadeIn(time);
        }, time + 1);
    }
}

/* WEATHER FUNCTIONS */
function setWeather(data) {
    const container = $("#weather");
    container.fadeOut(450);

    const skycons = new Skycons({"color": "black"});
    const icon = data.currently.icon.split("-").join("_").toUpperCase();
    skycons.add("icon", icon);
    skycons.play();

    $("#temp").html(Math.round(data.currently.apparentTemperature) + "&deg;");
    $("#summary").text(data.currently.summary.toUpperCase());

    setForecast(data.daily.data);

    container.fadeIn(450);
    $("#datetime").css("display", "flex").fadeIn(500);
}
function setForecast(data) {
    const skycons = new Skycons({"color": "black"});
    const forecast = $("#forecast");
    forecast.empty();
    for (let i = 1; i <= 4; i++) {
        forecast.append(
            $("<div>", {"class": "forecastday"}).append(
                $("<h5>", {"html": dayNames[(new Date().getDay() + i) % 7].substr(0, 2).toUpperCase()}),
                $("<canvas>", {"id": "day" + i, "width": "100", "height": "64"}),
                $("<p>", {"html": Math.round(data[i].apparentTemperatureLow) + "&deg; / " + Math.round(data[i].apparentTemperatureHigh) + "&deg;"})
            )
        );
        const icon = data[i].icon.toUpperCase().replace("-", "_");
        skycons.add("day" + i, icon);
        skycons.play();
    }
}

/* NU.NL FUNCTIONS */
function setNews(data) {
    data = data.channel;
    const nu = $("#nu-stories");
    const container = $("#nu");
    container.fadeOut(250);
    nu.empty();

    $.each(data.item, function (key, value) {
        nu.append(
            $("<div>", {class: "story"}).append(
                $("<img>", {src: value.enclosure["@attributes"].url, alt: value.enclosure["@attributes"].type}),
                $("<div>", {class: "content"}).append(
                    $("<h4>", {html: value.title}),
                    $("<p>", {html: value.description.split("&nbsp;").join(" ")})
                )
            )
        );
        nu.append($("<hr>"));
    });

    animateVerScroll(nu);
    container.fadeIn(200);
}

/* TWEAKERS FUNCTIONS */
function setTweakers(data) {
    data = data.channel;
    const container = $("#tweakers");
    const tweakers = $("#tweakers-stories");
    container.fadeOut(250);
    tweakers.empty();

    $.each(data.item, function (key, value) {
        tweakers.append(
            $("<div>", {class: "story"}).append(
                $("<h4>", {html: value.title}),
                $("<p>", {html: parseDescription(value.description)})
            )
        );
        tweakers.append($("<hr>"));
    });

    animateVerScroll(tweakers);
    container.fadeIn(250);
}
function parseDescription(desc) {
    desc = desc.split("&nbsp;").join(" ");
    desc = desc.split("<img")[0];
    return desc;
}

/* OV FUNCTIONS */
function setBusData(data) {
    $.each(data, function (key, value) {
        const cont = $("#" + key);
        cont.fadeOut(250);
        const elem = $("#" + key + "-departures");
        let buses = {};
        elem.empty();

        elem.append(
            $("<tr>").append(
                $("<th>", {html: "Lijn", class: "right"}),
                $("<th>", {html: "Bestemming"}),
                $("<th>", {html: "Vertrek"})
            )
        );

        // Add all departures for all platforms to 1 object
        $.each(value, function (key, value) {
            $.extend(buses, value.Passes);
        });

        // Turn to object into an array for sorting purposes
        buses = $.map(buses, function (value, index) {
            return [value];
        });

        // Filter only for departing buses
        buses = buses.filter(function (item) {
            return item.JourneyStopType != "LAST";
        });


        // Sort the array by child's expected departure time
        buses.sort(function (a, b) {
            return new Date(a.ExpectedDepartureTime).getTime() - new Date(b.ExpectedDepartureTime).getTime();
        });

        buses.splice(8);
        $.each(buses, function (key, value) {
            elem.append(
                $("<tr>", {class: "departure"}).append(
                    $("<td>", {class: "right"}).append(
                        $("<h4>", {html: value.LinePublicNumber})
                    ),
                    $("<td>").append(
                        $("<h4>", {html: value.DestinationName50})
                    ),
                    $("<td>").append(
                        $("<h4>", {html: value.ExpectedDepartureTime.split("T")[1].substr(0, 5)})
                    )
                )
            )
        });

        cont.fadeIn(250);
    });
}
function setTrainData(data) {
    const cont = $("#train-dtc");
    cont.fadeOut(200);
    const train_dtc = $("#train-dtc-departures");
    train_dtc.empty();

    // Add the table head
    train_dtc.append(
        $("<tr>").append(
            $("<th>", {html: "Vertrek", class: "right"}),
            $("<th>", {html: "Naar / Opmerkingen"}),
            $("<th>", {html: "Spoor"})
        )
    );

    data.VertrekkendeTrein.splice(8);
    $.each(data.VertrekkendeTrein, (key, value) => {
        train_dtc.append(
            $("<tr>", {class: "departure"}).append(
                $("<td>", {class: "right"}).append(
                    $("<h4>", {html: value.VertrekTijd.split("T")[1].substr(0, 5)}),
                    $("<h4>", {
                        html: value.VertrekVertraging ? value.VertrekVertragingTekst : "",
                        class: "delay"
                    })
                ),
                $("<td>", {class: "destination"}).append(
                    $("<h4>", {html: value.EindBestemming}),
                    $("<h5>", {
                        html: value.Opmerkingen ? value.Opmerkingen[0] : "",
                        class: value.Opmerkingen ? "route note" : "route"
                    })
                ),
                $("<td>", {class: "track"}).append(
                    $("<h4>", {html: value.VertrekSpoor})
                )
            )
        )
    });
    cont.fadeIn(200);
}

$(document).ready(() => {
    const site_root = $('meta[name="base_url"]').attr('content');
    let url;

    /* DATE/TIME */
    getDateTime();
    setInterval(getDateTime, 1000); // 1 second interval

    /* NOTIFICATION PANEL FUNCTIONS */
    $("#flipper").fadeIn(400);
    setInterval(notificationFlipper, 1000 * 5);

    /* WEATHER */
    url = `${site_root}/modules/weather.php`;
    request(url, setWeather);
    setInterval(request(url, setWeather), 1000 * 60 * 5); // 5 minute interval

    /* NU.NL */
    url = `${site_root}/modules/nu.php`;
    request(url, setNews);
    setInterval(request(url, setNews), 1000 * 60 * 10); // 10 minute interval

    /* TWEAKERS */
    url = `${site_root}/modules/tweakers.php`;
    request(url, setTweakers);
    setInterval(request(url, setTweakers), 1000 * 60 * 10); // 10 minute interval

    /* BUSES */
    url = `${site_root}/modules/bus.php`;
    request(url, setBusData);
    setInterval(request(url, setBusData), 1000 * 60 * 5); // 5 minute interval

    /* TRAINS */
    url = `${site_root}/modules/ns.php`;
    request(url, setTrainData);
    setInterval(request(url, setTrainData), 1000 * 60 * 5); // 5 minute interval

    /* SLIDE(R/S) */
    nextSlide($("#dashboard").data("time"));

    setInterval(function () {
        location.reload(true)
    }, 1000 * 60 * 60); // Reload every 60 minutes
});
