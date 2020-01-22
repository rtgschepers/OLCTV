<?php

namespace App;

class Helpers
{
    public static function breadcrumbs($crumbs)
    {
        if(is_numeric(end($crumbs)))
            array_pop($crumbs);

        $breadcrumbs = "";
        for ($i = 1; $i < count($crumbs); $i++) {
            if ($i != count($crumbs) - 1)
                $breadcrumbs .= "<a href='/admin/$crumbs[$i]'>".ucfirst($crumbs[$i])."</a>";
            else
                $breadcrumbs .= ucfirst($crumbs[$i]);
            $breadcrumbs .= " / ";
        }

        return substr($breadcrumbs, 0, -3);
    }

    public static function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[mt_rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}