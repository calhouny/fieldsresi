<?php

$output = $el_class = $image = $img_size = $img_link = $img_link_target = $img_link_large = $title = $alignment = $css_animation = $css = '';

extract(shortcode_atts(array(
    'title' => '',
    'image' => $image,
    'img_size'  => 'thumbnail',
    'img_link_large' => false,
    'img_link' => '',
    'img_link_target' => '_self',
    'alignment' => 'left',
    'el_class' => '',
    'css_animation' => '',
    'style' => '',
    'border_color' => '',
    'css' => '',
    'link' => '',
    'image_hover'=>'',
    'image_hover_src'=>'',
    'image_hover_text'=>'',
    'image_hover_pre_text'=>'',
    'image_hover_type'=>''
), $atts));

global $detheme_Style;


$style = ($style!='') ? $style : '';
$border_color = ($border_color!='') ? ' vc_box_border_' . $border_color : '';

$img_id = preg_replace('/[^\d]/', '', $image);
$hover_content="";
if($image_hover!='none'){

    if($image_hover=='image'){
        if($image_hover_content = wpb_getImageBySize(array( 'attach_id' => $image_hover_src, 'thumb_size' => $img_size, 'class' => "image-hover ".$style ))){
            $hover_content=$image_hover_content['thumbnail'];
        }
    }
    else{

         if(""!=$image_hover_text || ""!=$image_hover_pre_text ){
            $hover_content="<div class=\"text-hover\"><div class=\"text-hover-container\"><span class=\"text-hover-pre-title\">".$image_hover_pre_text."</span><h3 class=\"text-hover-title\">".do_shortcode(rawurldecode($image_hover_text))."</h3></div></div>";
        }


    }

    $style.=" image-active";

}

$img = wpb_getImageBySize(array( 'attach_id' => $img_id, 'thumb_size' => $img_size, 'class' => $style.($image_hover!='none'?" hover-type-".$image_hover:"").$border_color ));
if ( $img == NULL ) $img['thumbnail'] = '<img class="'.$style.$border_color.'" src="'.$this->assetUrl('vc/no_image.png').'" />';//' <small>'.__('This is image placeholder, edit your page to replace it.', 'js_composer').'</small>';

$el_class = $this->getExtraClass($el_class);

$a_class = '';
if ( $el_class != '' ) {
    $tmp_class = explode(" ", strtolower($el_class));
    $tmp_class = str_replace(".", "", $tmp_class);
    if ( in_array("prettyphoto", $tmp_class) ) {
        wp_enqueue_script( 'prettyphoto' );
        wp_enqueue_style( 'prettyphoto' );
        $a_class = ' class="prettyphoto"';
        $el_class = str_ireplace(" prettyphoto", "", $el_class);
    }
}

$link_to = '';
if ( $img_link_large == true ) {
    $link_to = wp_get_attachment_image_src( $img_id, 'large' );
    $link_to = $link_to[0];
} else if ( strlen($link) > 0 ) {
    $link_to = $link;
} else if ( ! empty( $img_link ) ) {
    $link_to = $img_link;
    if ( ! preg_match( '/^(https?\:\/\/|\/\/)/', $link_to ) ) $link_to = 'http://' . $link_to;
}

if($hover_content){

    $img['thumbnail'].=$hover_content;
}

 if ( is_string($img_size) && preg_match('/dt_vc_box_diamond/',$style)){

    global $_wp_additional_image_sizes;

    if(in_array($img_size, array('thumbnail','thumb', 'medium', 'large','full'))){

        if ( $img_size == 'thumb' || $img_size == 'thumbnail' ) {
            $thumb_size[] = intval(get_option('thumbnail_size_w'));
        }
        elseif ( $img_size == 'medium' ) {
            $thumb_size[] = intval(get_option('medium_size_w'));
        }
        elseif ( $img_size == 'large' ) {
            $thumb_size[] = intval(get_option('large_size_w'));
        }else{

            $thumb_size[]=$img['p_img_large'][1];
        }

    }
    elseif(!empty($_wp_additional_image_sizes[$img_size]) && is_array($_wp_additional_image_sizes[$img_size])){
        $thumb_size[]=$_wp_additional_image_sizes[$img_size]['width'];
    }
    else{

        preg_match_all('/\d+/', $img_size, $thumb_matches);

        if(isset($thumb_matches[0])) {
            $thumb_size = array();
            if(count($thumb_matches[0]) > 1) {
                $thumb_size[] = $thumb_matches[0][0]; // width
                $thumb_size[] = $thumb_matches[0][1]; // height
            } elseif(count($thumb_matches[0]) > 0 && count($thumb_matches[0]) < 2) {
                $thumb_size[] = $thumb_matches[0][0]; // width
                $thumb_size[] = $thumb_matches[0][0]; // height
            } else {
                $thumb_size = false;
            }
        }
    }
 }

$img_output = preg_match('/vc_box_shadow_3d/',$style) ? '<span class="vc_box_shadow_3d_wrap">' . $img['thumbnail'] . '</span>' : 
(preg_match('/dt_vc_box_diamond/',$style)?"<div class=\"ketupat0\"".($thumb_size?" style=\"width:".($thumb_size[0] -($thumb_size[0]*10/100) )."px;height:".($thumb_size[0] -($thumb_size[0]*10/100) )."px\"":"")."><div class=\"ketupat1\"><div class=\"ketupat2\">".$img['thumbnail']."</div></div></div>":$img['thumbnail']);

$image_string = !empty($link_to) ? '<a'.$a_class.' href="'.$link_to.'"'.($img_link_target!='_self' ? ' target="'.$img_link_target.'"' : '').'>'.$img_output.'</a>' : $img_output;
$css_class =  apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, 'wpb_single_image wpb_content_element'.$el_class.vc_shortcode_custom_css_class($css, ' '), $this->settings['base']);
$css_class .= $this->getCSSAnimation($css_animation);

$css_class .= ' vc_align_'.$alignment;

$output .= "\n\t".'<div class="'.$css_class." ".$image_hover_type.'">';
$output .= "\n\t\t".'<div class="wpb_wrapper">';
$output .= "\n\t\t\t".wpb_widget_title(array('title' => $title, 'extraclass' => 'wpb_singleimage_heading'));
$output .= "\n\t\t\t".$image_string;
$output .= "\n\t\t".'</div> '.$this->endBlockComment('.wpb_wrapper');
$output .= "\n\t".'</div> '.$this->endBlockComment('.wpb_single_image');

echo $output;

if(!empty($css)){

    $detheme_Style[]=$css;
}