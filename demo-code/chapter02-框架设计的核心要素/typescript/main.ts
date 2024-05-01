function foo(val:any) {
  return val
}
const res = foo('foo')

function bar<T extends any>(val: T): T {
  return val
}
const res2 = bar('bar' as string)
