$(document).ready(() => {
    const txtFirstName = $("#first_name");
    const txtLastName = $("#last_name");
    const txtEmail = $("#email");
    const txtPassword = $("#password");

    const btnChangeInfo = $("#change-info");
    const btnCancelInfo = $("#cancel-info");
    const btnSaveInfo = $("#save-info");
    const btnSaveDefaultDashboard = $("#save-default-dashboard");

    btnChangeInfo.click(() => {
       btnChangeInfo.hide();
       btnCancelInfo.show();
       btnSaveInfo.show();

       txtFirstName.removeAttr('disabled');
       txtLastName.removeAttr('disabled');
       txtEmail.removeAttr('disabled');
       txtPassword.removeAttr('disabled');
    });

    btnCancelInfo.click(() => {
        location.reload();
    });

    btnSaveInfo.click(confirmSave);
    btnSaveDefaultDashboard.click(confirmSave);

});

function confirmSave(e) {
    if(!confirm("Are you sure you want to save changes?")) {
        e.preventDefault();
    }
}