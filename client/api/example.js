import request from 'superagent'

export async function getExamples () {
  try {
    console.log('calling API call')
    const data = await request('/examples/api/')
    // console.log('data', data)
    return data.body.examples
  } catch (error) {
    console.error(error)
  }
}
