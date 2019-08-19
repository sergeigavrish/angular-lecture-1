import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'counter'
})
export class CounterPipe implements PipeTransform {

    transform(value: number): string {
        return `Counter value is: ${value}`;
    }

}
