import {Component} from '@angular/core';

@Component({
	selector:			'sps-contact-section',
	template:			`
		<section id="contact" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div>
						<p>Contact Wisconsin Women for Trump</p>
						<p><a href="mailto:wwft2016@gmail.com" target="_top">wwft2016@gmail.com</a><p>
					</div>
				</div>
			</div>
		</section>
	`,
	styles:				[`
		.dark-bg a:hover {color: white;}
	`]
})

export class SpsContactSection {
	
}