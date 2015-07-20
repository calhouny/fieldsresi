<?php
$output = $el_class = $width = '';
extract(shortcode_atts(array(
    'el_class' => '',
    'width' => '1/1',
    'css' => '',
	'offset' => ''
), $atts));

global $detheme_Style;

switch ($width) {
	case '1/5':
			$width="span_1_5";
		break;
	case '2/5':
			$width="span_2_5";
		break;
	case '3/5':
			$width="span_3_5";
		break;
	case '4/5':
			$width="span_4_5";
		break;
	default:
		break;
}
$el_class = $this->getExtraClass($el_class);
$width = wpb_translateColumnWidthToSpan($width);

if(function_exists('vc_column_offset_class_merge')){
	$width = vc_column_offset_class_merge($offset, $width);
}

$el_class .= ' wpb_column column_container';

$css_class = apply_filters(VC_SHORTCODE_CUSTOM_CSS_FILTER_TAG, $width.$el_class.vc_shortcode_custom_css_class($css, ' '), $this->settings['base']);
$output .= "\n\t".'<div class="'.$css_class.'">';
$output .= "\n\t\t".'<div class="wpb_wrapper">';
$output .= "\n\t\t\t".wpb_js_remove_wpautop($content);
$output .= "\n\t\t".'</div> '.$this->endBlockComment('.wpb_wrapper');
$output .= "\n\t".'</div> '.$this->endBlockComment($el_class) . "\n";

echo $output;

if(!empty($css)){

	$detheme_Style[]=$css;
}