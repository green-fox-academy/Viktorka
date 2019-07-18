import Apple from './apple'
import test from 'tape'

test(t=> {
    let apfel: Apple = new Apple();
    apfel.getApple()
    t.equals(apfel.getApple(), "apple")
    t.end()
})
