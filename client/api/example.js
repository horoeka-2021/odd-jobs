import request from 'superagent'

export async function getExamples () {
  try {
    const data = await request('/examples/data/').body
    return data
  } catch (error) {
    return []
  }
}
