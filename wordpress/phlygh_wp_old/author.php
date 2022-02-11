<?php
 get_header();

 ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
	
	<div class="author_info">

		<!-- This sets the $curauth variable -->
		<div class="width_max">
			<div class="whole">
				<div class="half">
				    <div class="author_bg"></div>
				</div>

				<div class="half half_vert">

					<div class="vert">
					    <?php
					    $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
					    ?>

					    <h1 class="page-title">@<span><?php echo $curauth->nickname; ?></span></h1>
					    <p><?php echo $curauth->user_description; ?></p>
					</div>

				</div>
			</div>
		</div>

		<div class="single_meta">

		<!-- buttons  -->
		<div class="width_max">

				<div class="whole">
					<div class="entry-cats flat">
						<ul class="entry-cats-container">
							<li><a href="https://phlygh.com/category/video/" title="video">video</a></li>		</ul>
					</div>

					<!-- tags -->
					<div class="entry-tags flat">
						<ul class="entry-tags-container">
							<li><a href="https://phlygh.com/tag/youtube/">youtube</a></li>
						</ul>
					</div>

					<!-- date & views -->
					<div class="entry-date flat">
						<div class="entry-date-container">
							<span>
								<p>
									2 weeks ago				</p>
							</span>
						</div>
					</div>

					<div class="entry-views flat">
						<div class="entry-views-container">
							<span>
								<p>
									21 views				</p>
							</span>
						</div>
					</div>

				</div>

			</div>

		</div>

		<!-- youtubes -->
			<?php if ( $curauth->nickname == 'nownigel' ) : ?>

				<div class="width_max">
					<div class="whole">
						<div class="half">
					    <iframe width="560" height="315" src="https://www.youtube.com/embed/gdUXzyH9PQE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				    </div>

					<div class="half">

					    <iframe width="560" height="315" src="https://www.youtube.com/embed/gdUXzyH9PQE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				    </div>
				</div>
				</div>
				
			<?php endif; ?>

			<?php if ( $curauth->nickname == 'desmond' ) : ?>

		    <iframe width="560" height="315" src="https://www.youtube.com/embed/gdUXzyH9PQE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

				
			<?php endif; ?>


			<?php if ( $curauth->nickname == 'maisiekocher' ) : ?>

		    <iframe width="560" height="315" src="https://www.youtube.com/embed/ROkvOjBzLi0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

				
			<?php endif; ?>


			<?php if ( $curauth->nickname == 'john' ) : ?>

		    <iframe width="560" height="315" src="https://www.youtube.com/embed/xA2tTjCqMRs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

				
			<?php endif; ?>

			<!-- link -->
		    <a class="author_website" href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a>

			<!-- wallet -->
			<?php if ( $curauth->nickname == 'nownigel' ) : ?>

		    	<div class="copy_Link">
					<input name="copy_Link" type="text" value="3JyC6GPisUYg9S489ZaQUaRyhtkJFQ3jDD"/>
				</div>';
				
			<?php endif; ?>

		<!-- wallet -->
		<?php if ( $curauth->nickname == 'nownigel' ) : ?>

			<div class="width_max">
				<div class="whole">
					<div class="half">
				    	<h3>The perfect YouTube thumbnail size for 2020</h3>

				    	<p>Having an engaging <strong>thumbnail image</strong> is one of the <span style="text-decoration: underline;">most critical steps </span>in&nbsp;<a rel="noreferrer noopener" href="https://learn.g2.com/how-to-make-youtube-channel" target="_blank">how to make a YouTube channel</a>.&nbsp;</p>
				    </div>

					<div class="half">
				    	<h3>The perfect YouTube thumbnail size for 2020</h3>

				    	<p>Having an engaging <strong>thumbnail image</strong> is one of the <span style="text-decoration: underline;">most critical steps </span>in&nbsp;<a rel="noreferrer noopener" href="https://learn.g2.com/how-to-make-youtube-channel" target="_blank">how to make a YouTube channel</a>.&nbsp;</p>
				    </div>
				</div>
			</div>
			
		<?php endif; ?>

	</div>


		<!-- This sets the $curauth variable -->
		<div class="width_max">
			<div class="whole">

				<div class="half half_vert">

					<div class="vert">
					    
					    <ul><li><a href="https://learn.g2.com/youtube-thumbnail-size#youtube-thumbnail-dimensions">YouTube thumbnail dimensions: What do they mean?</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#change-youtube-thumbnail">How to change a thumbnail on YouTube</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#how-to-make-youtube-thumbnail">How to make a YouTube thumbnail</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#upload-youtube-thumbnail">How to upload a YouTube custom thumbnail</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#thumbnail-best-practices">Six YouTube thumbnail best practices</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#thumbnail-problems-solutions">Troubleshooting: Why can’t I upload a custom thumbnail?</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#youtube-thumbnail-templates">Free YouTube thumbnail templates</a></li></ul>

					</div>

				</div>


				<div class="half">
				    <div class="author_bg"></div>
				</div>
				
			</div>
		</div>



		<!-- This sets the $curauth variable -->
		<div class="width_max">
			<div class="whole">

				<div class="half half_vert">

					<div class="vert">
					    
					    <ol><li><a href="https://learn.g2.com/youtube-thumbnail-size#youtube-thumbnail-dimensions">YouTube thumbnail dimensions: What do they mean?</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#change-youtube-thumbnail">How to change a thumbnail on YouTube</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#how-to-make-youtube-thumbnail">How to make a YouTube thumbnail</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#upload-youtube-thumbnail">How to upload a YouTube custom thumbnail</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#thumbnail-best-practices">Six YouTube thumbnail best practices</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#thumbnail-problems-solutions">Troubleshooting: Why can’t I upload a custom thumbnail?</a></li><li><a href="https://learn.g2.com/youtube-thumbnail-size#youtube-thumbnail-templates">Free YouTube thumbnail templates</a></li></ol>
					    
					</div>

				</div>


				<div class="half">
				    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using GarageBand... <a href="https://t.co/0JoDUxRWos">pic.twitter.com/0JoDUxRWos</a></p>&mdash; nownigel 📟 (@nownigel) <a href="https://twitter.com/nownigel/status/1119784678519713794?ref_src=twsrc%5Etfw">April 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>
				
			</div>
		</div>


		<!-- This sets the $curauth variable -->
		<div class="width_max">
			<div class="whole">

				<div class="half half_vert">

					<div class="vert">
					    <?php
					    $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
					    ?>

					    <h1 class="page-title">@<span><?php echo $curauth->nickname; ?></span></h1>
					    <p><?php echo $curauth->user_description; ?></p>
					</div>

				</div>


				<div class="half">
				    <div class="author_bg"></div>
				</div>

			</div>
		</div>



		<?php
			if (have_posts()) :
				while(have_posts()) : the_post(); ?>


					<?php get_template_part( 'content', 'preview' ); ?>
				<?php endwhile;

			else :
				echo '<p>no content found</p>';

			endif;
			?>

	</main>

</div>
<?php

 get_footer();

?>