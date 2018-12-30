import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { strict } from 'assert';

const subject: Subject<any> = new Subject();

const ibuki: any = {};
ibuki.emit = (id: string, options: any) => {
    subject.next({ id: id, data: options });
}

ibuki.filterOn = (id: string) => {
    return subject.pipe(filter((d) => d.id === id));
}

export default ibuki;