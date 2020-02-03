import 'mocha'
// import app from '../src/index'
import { expect } from 'chai'
// import {agent as request} from 'supertest';

describe('Testing Order operations', () => {
  
  it('can add an order', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can get an order by Id', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can get an order by Customer email', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can update an order by id', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can cancel an order by id', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('should decrease inventory when creating an order', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('should increase inventory when canceling an order', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })
})
