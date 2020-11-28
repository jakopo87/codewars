# http://www.codewars.com/kata/how-do-i-compare-numbers
def what_is(x):
    if x is 42:
        return 'everything'
    elif x is math.pow(42, 2):
        return 'everything squared'
    else:
        return 'nothing'
# -----------------------------------------------------
tests = [
    (0, 'nothing'),
    (123, 'nothing'),
    (-1, 'nothing'),
    (42, 'everything'),
    (42 * 42, 'everything squared'),
]
for x, answer in tests:
    print(what_is(x), answer)