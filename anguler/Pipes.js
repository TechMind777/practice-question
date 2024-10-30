/**
 * 
16. What are Pure Pipes? 
    These pipes are pipes that use pure functions. As a result of this, a pure pipe doesn't use any internal state, and the output remains the 
    same as long as the parameters passed stay the same. Angular calls the pipe only when it detects a change in the parameters being passed.
    A single instance of the pure pipe is used throughout all components. 

17. What are Impure Pipes?
    For every change detection cycle in Angular, an impure pipe is called regardless of the change in the input fields. Multiple pipe instances
    are created for these pipes. Inputs passed to these pipes can be mutable. 

    By default, all pipes are pure. However, you can specify impure pipes using the pure property, as shown below.

    @Pipe({
      name: 'demopipe',
      pure : true/false 
    })

    export class DemopipePipe implements PipeTransform { transform(value: unknown, ...args: unknown[]): unknown {  return null; } }


    
11. What are Pipes in Angular? 
    In Angular, pipes are a way to transform data in your templates. They can be categorized as pure or impure based on how they behave with regard to change detection. Understanding the difference between pure and impure pipes is crucial for performance optimization and for deciding when to use which type.

    Pipes are simple functions designed to accept an input value, process, and return as an output, a transformed value in a more technical understanding.
    Angular supports several built-in pipes. However, you can also create custom pipes that cater to your needs. 

    Some key features include: 

    Pipes are defined using the pipe “|” symbol. 
    Pipes can be chained with other pipes.
    Pipes can be provided with arguments by using the colon (:) sign.


    DatePipe	Formats a date value according to locale rules.
    UpperCasePipe	Transforms text to all upper case.
    LowerCasePipe	Transforms text to all lower case.
    CurrencyPipe	Transforms a number to a currency string, formatted according to locale rules.
    DecimalPipe	Transforms a number into a string with a decimal point, formatted according to locale rules.
    PercentPipe	Transforms a number to a percentage string, formatted according to locale rules.



    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
        name: 'activeItems',
        pure: false // Marking this pipe as impure
    })
    export class ActiveItemsPipe implements PipeTransform {
        transform(items: any[]): any[] {
            return items.filter(item => item.active); // Only return items that are active
        }
    }




    @Pipe({
    name: 'formatString'
    })
    export class FormatStringPipe implements PipeTransform {
        transform(value: string, prefix: string, suffix: string, uppercase: boolean = false): string {
            let formattedString = `${prefix}${value}${suffix}`;
            return uppercase ? formattedString.toUpperCase() : formattedString;
        }
    }
    
    //<p>{{ 'Angular' | formatString:'Hello, ':'!':true }}</p>

 */