input_array = list(map(int,input().split()))
og_array = [1,1,2,2,2,8]

for i in range(6):
    print(og_array[i]-input_array[i],end=' ')