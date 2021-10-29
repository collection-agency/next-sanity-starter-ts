/**
 * @jest-environment jsdom
 */

import handler from '../pages/api/hello'

describe('api hello', () => {
  test('returns john doe', async () => {
    const req = {

    }
    const json = jest.fn() 
    const status = jest.fn(() => {
      return {
        json
      }
    })
    const res = {
      status
    }

    await handler(req, res)

    expect(status.mock.calls[0][0]).toBe(200)
    expect(json.mock.calls[0][0].name).toBe('John Doe')
  })
})