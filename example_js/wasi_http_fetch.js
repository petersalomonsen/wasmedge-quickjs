import { fetch } from 'http'

async function test_fetch() {
    try {
        let r = await fetch("http://152.136.235.225/get?id=1")
        print('test_fetch\n', await r.text())
    } catch (e) {
        print(e)
    }
}
test_fetch()

async function test_fetch_post() {
    try {
        let r = await fetch("http://152.136.235.225/post", { method: 'post', 'body': 'post_body' })
        print('test_fetch_post\n', await r.text())
    } catch (e) {
        print(e)
    }
}
test_fetch_post()

async function test_fetch_put() {
    try {
        let r = await fetch("http://152.136.235.225/put",
            {
                method: "put",
                body: JSON.stringify({ a: 1 }),
                headers: { 'Context-type': 'application/json' }
            })
        print('test_fetch_put\n', await r.text())
    } catch (e) {
        print(e)
    }
}
test_fetch_put()