def solution(babbling):
    result = 0

    for i in babbling:
        tmp = i.replace('aya','1').replace('ye','2').replace('woo','3').replace('ma','4')

        if tmp.isdecimal() and (tmp.count('1')==0 or 1) and (tmp.count('2')==0 or 1) and (tmp.count('3')==0 or 1) and (tmp.count('4')==0 or 1):
            result+=1

    return result