import request from 'superagent'

export async function getExamples () {
  try {
    const data = await request('/examples/api/')
    return data.body.examples
  } catch (error) {
    return []
  }
}
