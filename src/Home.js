import React from 'react';
import './Home.css';

class Home extends React.Component
{

    render() {
		const img1 = "https://images.squarespace-cdn.com/content/v1/5549550fe4b0c34cae590a68/1612210373517-AIPBSNPUHX2WSVXDNJ4T/thumbnail.jpg";
		const img2 = "https://images.squarespace-cdn.com/content/v1/5549550fe4b0c34cae590a68/1566761836290-M76CJUET6GNFKIIU5LT9/thhumb.jpg";
        return (
            <div className="Home">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				<header>
					<h1>Kevin Cheung</h1>
				</header>
				<div id = "topNav">
					<nav class="main-nav">
						<ul>
							<li>
								<a class="default" href="/home">work</a>
							</li>
							<li>
								<a href="/">publication</a>
							</li>
							<li>
								<a href="/">about</a>
							</li>
						</ul>
					</nav>
				</div>
				<section class="section-collection">
					<div class="collection_inner">
						<div class="container wrapper">
							<div class="collection_grid-container">
								<div class="collection_grid">
									<div class="grid grid--gapless">
										<Grid value={img1} desc="Thing1"/>
										<Grid value={img1} desc="Thing1"/>
										<Grid value={img1} desc="Thing1"/>
										<Grid value={img2} desc="Thing2"/>
										<Grid value={img2} desc="Thing2"/>
										<Grid value={img2} desc="Thing2"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
        );
    }				
}

class Grid extends React.Component
{
	render() {
		return (
			<div className ="Grid">
				<a href="/7" class="tile">
					<div class="tile_wrapper">
						<div class="tile_inner">
							<div class="tile_image">
								<div class="image image-primary-background">
									<div class="image_object">
										<img src={this.props.value} alt="test1" 
										style={{ width: '285px', height: '201px'}}/>
									</div>
								</div>
							</div>
							<div class="tile_description">
								{this.props.desc}
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}


export default Home;