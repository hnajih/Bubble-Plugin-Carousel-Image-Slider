function(instance, properties, context) {
    
    const randomId = 'image-carousel' + Math.random().toString(36).slice(2);
        
	const section = document.createElement('section');
    section.setAttribute('id', randomId);
    section.setAttribute('class', 'splide');
    section.setAttribute('aria-label', 'My Awesome Gallery');
    
    const track = document.createElement('div');
    track.setAttribute('class', 'splide__track');
    
    const list = document.createElement('ul');
    list.setAttribute('class', 'splide__list');   
    
    if(properties.images?.length() > 0){
        
    	const images = properties.images?.get(0, properties.images?.length()) || [];
        
        images.map((src, i) => {
        
            const slide = document.createElement('li');
            slide.setAttribute('class', 'splide__slide');

            const img = document.createElement('img');
            img.setAttribute('src', src )

            slide.append(img)
            list.append(slide)
            
        })
    	   
    }
    
    track.append(list)
    section.append(track)
    instance.canvas.append(section);
       
    const splide = new Splide('#'+randomId);
	splide.mount();

}