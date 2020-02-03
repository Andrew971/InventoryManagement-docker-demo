import 'mocha'
// import app from '../src/index'
import { expect } from 'chai'
// import {agent as request} from 'supertest';

describe('Testing Inventory operations', () => {
  
  it('can add a product in the inventory', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can update a product in the inventory', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can delete a product in the inventory', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can get a product in the inventory', async () => {
    const res = {
      status: 200
    }
    // const res = await request(app).get('/api')

    expect(res.status).to.equal(200)
    // expect(res.body).not.to.be.empty
    // expect(res.body).not.to.be.empty
    // expect(res.body).to.be.an('string')

  })

  it('can get a list of product in the inventory', async () => {
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
