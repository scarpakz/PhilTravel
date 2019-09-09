<template>
    <div>
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <!-- Text slides with image -->
        
            <b-carousel-slide
                caption="Explore the mountains"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores. Magnam natus eos repellat magni tenetur, velit doloremque iure nostrum, deserunt inventore accusantium unde nemo facere quaerat laudantium. Nulla, voluptatibus?"
                img-src="https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide caption="Explore the mountains"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores. Magnam natus eos repellat magni tenetur, velit doloremque iure nostrum, deserunt inventore accusantium unde nemo facere quaerat laudantium. Nulla, voluptatibus?" img-src="https://images.pexels.com/photos/2798477/pexels-photo-2798477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide caption="Explore the mountains"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores. Magnam natus eos repellat magni tenetur, velit doloremque iure nostrum, deserunt inventore accusantium unde nemo facere quaerat laudantium. Nulla, voluptatibus?" img-src="https://images.pexels.com/photos/757444/pexels-photo-757444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide caption="Explore the mountains"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores. Magnam natus eos repellat magni tenetur, velit doloremque iure nostrum, deserunt inventore accusantium unde nemo facere quaerat laudantium. Nulla, voluptatibus?" img-src="https://images.pexels.com/photos/1799487/pexels-photo-1799487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            </b-carousel-slide>
        </b-carousel>
  </div>
</template>