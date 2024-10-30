import {Input, input} from '@angular/core';

@CompositionEvent({})

class Event { 
    // @Input ({required: true}) image!: {src: string;alt:string}; 
    // @Input ({required: true}) title!: string; 
    image = input.required<{src: string;alt:string}>()// fro version 17
}