add_action('wp', function () { ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
    $(document).ready(function(){
        $('.tab-content').hide();
        $('.tab-content:first').show();
      $('.tabs-nav .wp-block-button__link').click(function() {
        let currentTab = $(this).attr('href');
        $('.tab-content').hide();
        $(currentTab).fadeIn();
    
        return false;
      });
    });
    </script>
    
    <?php });