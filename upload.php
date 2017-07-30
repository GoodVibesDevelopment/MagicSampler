<?php
// TODO: validation
// TODO: size limit
// TODO: prevent double files
$targetDir = "music/";
$targetFile = $targetDir . basename($_FILES['file']['name']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
    echo "Success";
} else {
    echo "Not uploaded because of error #".$_FILES["file"]["error"];
}