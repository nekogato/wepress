<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wepress
 */

get_header();
?>

<!-- content -->

<div class="content page_content">

    <div class="center_content scrollin scrollin1">
        <div class="homesection_title">
            <div class="num">02</div>
            <div class="name chi_align text5 text5"><span class="circle" style="background-color:#978a86;"></span>選購貨品</div> 
        </div>
        
        <div class="book_index_content">
        
            <div class="col col3">
            	<div class="book_index_menu_item_wrapper">
                    <div class="book_index_menu_item">
                        <div class="title">分類</div>
                        <ul>
                            <li><a href="#" class="active">小說</a></li>
                            <li><a href="#">攝影集</a></li>
                            <li><a href="#">教育</a></li>
                            <li><a href="#">語文</a></li>
                            <li><a href="#">兒童</a></li>
                        </ul>
                    </div>
                    <div class="book_index_menu_item">
                        <div class="title">分類</div>
                        <ul>
                            <li><a href="#" class="active">小說</a></li>
                            <li><a href="#">攝影集</a></li>
                            <li><a href="#">教育</a></li>
                            <li><a href="#">語文</a></li>
                            <li><a href="#">兒童</a></li>
                        </ul>
                    </div>
                    <div class="book_index_menu_item book_index_menu_item_big">
                        <div class="title">排序方式</div>
                    </div>
                </div>
            </div>
            
            <div class="book_index_list col col9">
                <div class=" book_index_item_wrapper">
                    <div class="col_inwrapper book_index_item_inwrapper">
                        <div class="col col4 book_index_item">
                            <div class="col_spacing">
                                <a href="#">
                                    <div class="thumb"><img src="<?php bloginfo('template_directory'); ?>/images/author1.jpg"></div>
                                    <div class="name chi_align text5">假如穿上我的鞋</div>
                                    <div class="circle">
                                    	<table class="chi_align">
                                        <td class=" text5"><div class="">售完</div></td>
                                        </table>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col col4 book_index_item">
                            <div class="col_spacing">
                                <a href="#">
                                    <div class="thumb"><img src="<?php bloginfo('template_directory'); ?>/images/author1.jpg"></div>
                                    <div class="name chi_align text5">假如穿上我的鞋</div>
                                </a>
                            </div>
                        </div>
                        <div class="col col4 book_index_item">
                            <div class="col_spacing">
                                <a href="#">
                                    <div class="thumb"><img src="<?php bloginfo('template_directory'); ?>/images/author1.jpg"></div>
                                    <div class="name chi_align text5">假如穿上我的鞋</div>
                                </a>
                            </div>
                        </div>
                        <div class="col col4 book_index_item">
                            <div class="col_spacing">
                                <a href="#">
                                    <div class="thumb"><img src="<?php bloginfo('template_directory'); ?>/images/author1.jpg"></div>
                                    <div class="name chi_align text5">假如穿上我的鞋</div>
                                </a>
                            </div>
                        </div>
                        <div class="col col4 book_index_item">
                            <div class="col_spacing">
                                <a href="#">
                                    <div class="thumb"><img src="<?php bloginfo('template_directory'); ?>/images/author1.jpg"></div>
                                    <div class="name chi_align text5">假如穿上我的鞋</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    		<div class="clear"></div>
            
            <div class="col col3 ">
            	<div class="book_index_pager text8">
                    <a href="#" class="active">01</a>
                    <a href="#" >02</a>
                    <a href="#" >03</a>
                    <a href="#" >04</a>
                    <a href="#" >05</a>
                </div>
            </div>
        </div>
    </div>
    <div class="clear"></div>
</div>


<div class="clear"></div>

<?php
get_footer();
