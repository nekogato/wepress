<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package wepress
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<!-- header -->

<div class="header">
	
    
    <a href="#" class="dropdown_btn mobile_show">
        <span class="linewrapper">
            <span class="line line1"><span class="leftline"></span><span class="rightline"></span></span>
            <span class="line line2"><span class="leftline"></span><span class="rightline"></span></span>
            <span class="line line3"><span class="leftline"></span><span class="rightline"></span></span>
        </span>
    </a>
    <div class="clear"></div>


    
    <a href="#" class="left_logo  scrollin scrollin1"><img src="<?php bloginfo('template_directory'); ?>/images/logo.png"></a>
    
    <div class="dropdown ">
    
        <div class="control_left  scrollin scrollin1">
          <a href="#"><div class="num text8">01</div><div class="text chi_align text6">新書介紹</div><div class="clear"></div></a>
            <a href="#"><div class="num text8">02</div><div class="text chi_align text6">選購貨品</div><div class="clear"></div></a>
        </div>
        
        <div class="control_right  scrollin scrollin1">
            <a href="#"><div class="num text8">03</div><div class="text chi_align text6">作者介紹</div><div class="clear"></div></a>
            <a href="#"><div class="num text8">04</div><div class="text chi_align text6">關於我們</div><div class="clear"></div></a>
        </div>
        
        <div class="control_sns  scrollin scrollin1">
            <ul>
                <li><a href="#" class="sns_circle text8">fb</a></li>
                <li><a href="#" class="sns_circle text8">ig</a></li>
                <li class="email_btn_wrapper">
                <a href="#" class="email_btn">
                    <svg version="1.1" id="email_btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="18px" viewBox="0 0 28 18" enable-background="new 0 0 28 18" xml:space="preserve">
                    <g>
                        <rect x="3.426" y="1.829" fill="none" stroke="#000000" stroke-width="0.9" stroke-miterlimit="10" width="20.98" height="14.342"/>
                        <g>
                            <polyline fill="none" stroke="#000000" stroke-width="0.9" stroke-miterlimit="10" points="24.574,1.829 14,11.358 3.426,1.829 "/>
                            <g>
                                <line fill="none" stroke="#000000" stroke-width="0.9" stroke-miterlimit="10" x1="3.575" y1="15.978" x2="10.812" y2="8.74"/>
                                <line fill="none" stroke="#000000" stroke-width="0.9" stroke-miterlimit="10" x1="24.425" y1="15.978" x2="17.188" y2="8.74"/>
                            </g>
                        </g>
                    </g>
                    </svg>
        
                </a>
                </li>
            </ul>
        </div>
    
    </div>
    
</div>

<div class="header_bg"></div>

<div class="fixmark fixmark_lt"></div>
<div class="fixmark fixmark_rt"></div>
<div class="fixmark fixmark_lb"></div>
<div class="fixmark fixmark_rb"></div>
<div class="fixmark fixmark_mt"></div>