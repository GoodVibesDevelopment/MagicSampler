<?php require "config.php"; ?>

<!doctype html>
<head>
<?php insert("head.section"); ?>
</head>
<body id="bodyId">
<section class="header">
    <?php insert("layout/header"); ?>
</section>

<section class="content">
  <?php insert("layout/settings"); ?>
  <?php insert("layout/samples"); ?>
</section>

<section>
    <?php insert("layout/upload"); ?>
</section>

<section class="footer">
    <?php insert("layout/footer"); ?>
</section>


<script src="events.js"></script>
</body>
</html>

<?php 
function insert($template){
    require "./html/{$template}.php";
}
?>
