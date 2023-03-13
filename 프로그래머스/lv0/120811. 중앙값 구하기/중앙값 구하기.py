from math import ceil 
def solution(array):
    array.sort(reverse=True)
    return array[ceil(len(array) / 2) -1]