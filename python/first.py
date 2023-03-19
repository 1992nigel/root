def nigelFunction(shit):
    return shit


def nigelFunctionArray(numbersInArray):
    smallest = numbersInArray[0]
    largest = numbersInArray[0]

    for number in numbersInArray:
        if number < smallest:
            smallest = number

        if number > largest:
            largest = number

        print(number)

    print('smallest = ',smallest)
    print('largest = ',largest)

print(nigelFunction('yerp'))
nigelFunctionArray([1,2,499,3,4,5,5,5,6])