import test from 'ava'
import isFalse from './'

test('true', t => {
  const values = ['false', false]
  t.plan(values.length)
  values.forEach(value => {
    let actual = isFalse(value)
    t.true(actual)
  })
})

test('should return false', t => {
  const values = [undefined, '', 123, {},
    [], null, isFinite, true
  ]
  t.plan(values.length)
  values.forEach(value => {
    let actual = isFalse(value)
    t.false(actual)
  })
})
