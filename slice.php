<?php
function sliceSound()
{
    $path = getcwd();
    if ($_GET) {
        //TODO: security!
        $filename = generateRandomString(6);
        $cmd = "ffmpeg -ss " .
            $_GET['start'] .
            " -i \"{$path}/music/{$_GET['sound']}\"" .
            " -t {$_GET['stop']}" .
            " \"" . $path . '/sample/' . $filename . ".wav\"";
//        echo "DBG";
        system($cmd);
//        echo "TEST";
        downloadSound($filename);
    } else {
        echo "Brak parametrow";
    }
}

function downloadSound($file){
    $path =  getcwd() . '/sample/' . $file . ".wav";
    echo $path;
    if (file_exists($path)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($path).'"');
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($path));
        ob_clean();
        flush();
        readfile($path);
        exit;
    }
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

sliceSound();
