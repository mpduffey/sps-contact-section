import {Component, Input} from '@angular/core';

@Component({
	selector:			'sps-contact-section',
	template:			`
		<section id="contact" class="section-padding bg-image overlay-dark dark-bg text-center" data-stellar-background-ratio="0.5" data-background-img="img/full/33.jpg">
			<div class="container">
				<div class="row">
					<div>
						<p>{{contactText}}</p>
						<p *ngIf="contactEmail"><a href="mailto:{{contactEmail}}" target="_top">{{contactEmail}}</a><p>
						<p *ngIf="contactPhone">contactPhone</p>
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
	@Input("contact-text") contactText;
	@Input("contact-email") contactEmail;
	@Input("contact-phone") contactPhone;
}