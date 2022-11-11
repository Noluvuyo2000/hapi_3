import {server, Server} from '@hapi/hapi';
import {describe, it, beforeEach, afterEach} from "mocha";
import chai, {expect} from "chai";

import { init } from '../src/server';
import { SlowBuffer } from 'buffer';

describe ('test case 1', async() => {
    let server:Server;

    //...
    //handle post scripts
    beforeEach((done) =>{
        init().then(initialise => {
            server = initialise;
            done();
        });
    });


    //event
    afterEach((done) => {
        server.stop().then(() => done());

    });

    it('index responds', async() => {
        const res = await server.inject({
            method: 'get',
            url: '/'

        });


    expect(res.statusCode).to.equal(200);
    expect(res.result).to.equal("Hello! Nice to meet you.");
    })

})

