
jQuery.noConflict();
jQuery(document).ready(function($){
	'use strict';

  var $select = $('select#dt-left-top-bar-select'),
  $menusource = $('#detheme_config-dt-left-top-bar-menu').parents('.form-table tr'),
  $textsource = $('#detheme_config-dt-left-top-bar-text').parents('.form-table tr'),
  $rselect = $('select#dt-right-top-bar-select'),
  $rmenusource = $('#detheme_config-dt-right-top-bar-menu').parents('.form-table tr'),
  $rtextsource = $('#detheme_config-dt-right-top-bar-text').parents('.form-table tr'),
  $headersetting=$('#detheme_config-dt-show-header'),
  $backgroundImage = $('#detheme_config-dt-banner-image').parents('.form-table tr'),
  $backgroundColor = $('#detheme_config-banner-color').parents('.form-table tr'),
  $background=$('select#dt-show-banner-page-select'),
  $sequenceslide=$('#detheme_config-homeslide').parents('.form-table tr'),
  $showslide=$('#detheme_config-showslide .cb-enable,#detheme_config-showslide .cb-disable'),
  $homebackground=$('select#homepage-background-type-select'),
  $homebackgroundColor = $('#detheme_config-homepage-header-color').parents('.form-table tr'),
  $pagebackground=$('select#header-background-type-select'),
  $pagebackgroundColor = $('#detheme_config-header-color').parents('.form-table tr'),
  $usefeaturedimage = $('#detheme_config-use-featured-image').parents('.form-table tr'),
  $shopbackgroundColor = $('#detheme_config-dt-shop-banner-image').parents('.form-table tr'),
  $showfooterwidget=$('#detheme_config-showfooterwidget .cb-enable,#detheme_config-showfooterwidget .cb-disable'),
  $footerwidget=$('#detheme_config-dt-footer-widget-column').parents('.form-table tr');

  var $headerlayout=$('input[name="detheme_config[dt-header-type]"]'),
  $bgmenuimage=$('#detheme_config-dt-menu-image').parents('.form-table tr'),
  $bgmenuimagehorizontal=$('#detheme_config-dt-menu-image-horizontal').parents('.form-table tr'),
  $bgmenuimagesize=$('#detheme_config-dt-menu-image-size').parents('.form-table tr'),
  $bgmenuimagevertical=$('#detheme_config-dt-menu-image-vertical').parents('.form-table tr');

  if ($('input[name="detheme_config[dt-header-type]"]:checked').val()=="leftbar") {

    $bgmenuimage.fadeIn('slow');
    $bgmenuimagehorizontal.fadeIn('slow');
    $bgmenuimagevertical.fadeIn('slow');
    $bgmenuimagesize.fadeIn('slow');
  } else {
    $bgmenuimage.fadeOut('slow');
    $bgmenuimagehorizontal.fadeOut('slow');
    $bgmenuimagevertical.fadeOut('slow');
    $bgmenuimagesize.fadeOut('slow');

  }

  $headerlayout.live('change',function(){

    if ($(this).val()=='leftbar') {
    $bgmenuimage.fadeIn('slow');
    $bgmenuimagehorizontal.fadeIn('slow');
    $bgmenuimagevertical.fadeIn('slow');
    $bgmenuimagesize.fadeIn('slow');
    } else {
    $bgmenuimagesize.fadeOut('slow');
    $bgmenuimage.fadeOut('slow');
    $bgmenuimagehorizontal.fadeOut('slow');
    $bgmenuimagevertical.fadeOut('slow');
    }
  });

  $background.live('change',function(){

    var background = $(this).val();
    switch ( background ) {
      case 'image':
        $backgroundColor.fadeOut('fast');
        $backgroundImage.fadeIn('slow');
        $usefeaturedimage.fadeOut('fast');
        if($shopbackgroundColor.length){
          $shopbackgroundColor.fadeIn('slow');
        }
        break;
      case 'featured':
        $backgroundColor.fadeOut('fast');
        $backgroundImage.fadeIn('slow');
        $usefeaturedimage.fadeIn('slow');
        if($shopbackgroundColor.length){
          $shopbackgroundColor.fadeIn('slow');
        }
        break;
      case 'color':
        $backgroundColor.fadeIn('fast');
        $backgroundImage.fadeOut('slow');
        $usefeaturedimage.fadeOut('fast');
        if($shopbackgroundColor.length){
          $shopbackgroundColor.fadeOut('fast');
        }

        break;
      default:
        $backgroundColor.fadeOut('fast');
        $backgroundImage.fadeOut('slow');
        $usefeaturedimage.fadeOut('fast');
        if($shopbackgroundColor.length){
          $shopbackgroundColor.fadeOut('fast');
        }

      }

  });


  $select.live('change',function(){

    var this_value = $(this).val();

    switch ( this_value ) {
      case 'text':
        $menusource.fadeOut('fast');
        $textsource.fadeIn('slow');
        break;
      case 'menu':
      case 'icon':
      default:
        $textsource.fadeOut('fast');
        $menusource.fadeIn('slow');
    }


   });

  $homebackground.live('change',function(){

     var this_value = $(this).val();

     var $homepageHeaderColorTransparent = $('#detheme_config-homepage-header-color-transparent').parents('.form-table tr'),
     $homepageHeaderFontColorTransparent = $('#detheme_config-homepage-header-font-color-transparent').parents('.form-table tr'),
     $homepageDTLogoImageTransparent = $('#detheme_config-homepage-dt-logo-image-transparent').parents('.form-table tr');
     
    switch ( this_value ) {
      case 'transparent':
        $homebackgroundColor.fadeOut('fast');
        $homepageHeaderColorTransparent.fadeIn('slow');
        $homepageHeaderFontColorTransparent.fadeIn('slow');
        $homepageDTLogoImageTransparent.fadeIn('slow');
        break;
      case 'solid':
      default:
        $homebackgroundColor.fadeIn('slow');
        $homepageHeaderColorTransparent.fadeOut('fast');
        $homepageHeaderFontColorTransparent.fadeOut('fast');
        $homepageDTLogoImageTransparent.fadeOut('fast');
    }

  });

  $pagebackground.live('change',function(){

     var this_value = $(this).val();

     var $headerColorTransparent = $('#detheme_config-header-color-transparent').parents('.form-table tr'),
     $headerFontColorTransparent = $('#detheme_config-header-font-color-transparent').parents('.form-table tr'),
     $dtLogoImageTransparent = $('#detheme_config-dt-logo-image-transparent').parents('.form-table tr');

    switch ( this_value ) {
      case 'transparent':
        $pagebackgroundColor.fadeOut('fast');
        $headerColorTransparent.fadeIn('slow');
        $headerFontColorTransparent.fadeIn('slow');
        $dtLogoImageTransparent.fadeIn('slow');
        break;
      case 'solid':
      default:
        $pagebackgroundColor.fadeIn('slow');
        $headerColorTransparent.fadeOut('fast');
        $headerFontColorTransparent.fadeOut('fast');
        $dtLogoImageTransparent.fadeOut('fast');
    }

  });

  $rselect.live('change',function(){

    var this_value = $(this).val();

    switch ( this_value ) {
      case 'text':
        $rmenusource.fadeOut('fast');
        $rtextsource.fadeIn('slow');
        break;
      case 'menu':
      case 'icon':
      default:
        $rtextsource.fadeOut('fast');
        $rmenusource.fadeIn('slow');
    }


   });

  $showslide.live('click',function(e){

    e.preventDefault();

    if($(this).hasClass('cb-enable')){

      if($(this).hasClass('selected')){

          $sequenceslide.fadeIn('fast');

      }

    }else{
      if($(this).hasClass('selected')){

          $sequenceslide.fadeOut('fast');
      }
    }

  }).live('change',function(e){

    e.preventDefault();
    if($(this).hasClass('cb-enable')){
      if($(this).hasClass('selected')){
          $sequenceslide.fadeIn('fast');
      }
    }else{
      if($(this).hasClass('selected')){

          $sequenceslide.fadeOut('fast');
      }
    }

  });

  $showfooterwidget.live('click',function(e){


    e.preventDefault();
    if($(this).hasClass('cb-enable')){
      if($(this).hasClass('selected')){
          $footerwidget.fadeIn('fast');
      }

    }else{
      if($(this).hasClass('selected')){

          $footerwidget.fadeOut('fast');
      }
    }

  }).live('change',function(e){
    e.preventDefault();
    if($(this).hasClass('cb-enable')){
      if($(this).hasClass('selected')){
          $footerwidget.fadeIn('fast');
      }
    }else{
      if($(this).hasClass('selected')){

          $footerwidget.fadeOut('fast');
      }
    }

  });

   $select.trigger('change');
   $rselect.trigger('change');
   $background.trigger('change');
   $showslide.trigger('change');
   $showfooterwidget.trigger('change');
   $homebackground.trigger('change');
   $pagebackground.trigger('change');

 });
