<div id="filename"></div>
<div id="progress"></div>
<div id="progressBar"></div>

<input type="file" name="file">

<script>
    // TODO: validation
    $(document).ready(function () {

        $('input[type=file]').change(function () {

            $(this).simpleUpload("/upload.php", {
                start: function (file) {
                    $('#filename').html(file.name);
                    $('#progress').html("");
                    $('#progressBar').width(0);
                },

                progress: function (progress) {
                    $('#progress').html("Progress: " + Math.round(progress) + "%");
                    $('#progressBar').width(progress + "%");
                },

                success: function (data) {
                    $('#progress').html("Success!<br>Data: " + JSON.stringify(data));
                },

                error: function (error) {
                    $('#progress').html("Failure!<br>" + error.name + ": " + error.message);
                }

            });

        });

    });
</script>