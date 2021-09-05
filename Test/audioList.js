import supertest from 'supertest';
import { expect } from 'chai';
const request = supertest('https://www.sbs.com.au/');

describe('Audio list', () => {

    it('get the status code', () => {
        return request.get('guide/ajax_radio_program_catchup_data/language/hindi/location/NSW/sublocation/Sydney').then((res) => {
            expect(res.body.data).to.not.be.null;
            expect(res.status).to.equal(200);
            const abc = Object.values(res.body)
            abc.forEach(function (abc) {
                console.log(abc.archiveAudio)

            });

        });

    });

});


