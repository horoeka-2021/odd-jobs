import request from 'superagent'

export async function getExamples () {
  try {
    const data = await request('/example/api/')
    return data.body.examples
  } catch (error) {
    return []
  }
}
