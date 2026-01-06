class Solution:
    def leaders(self, arr):
        # code here
        L=[]
        max_a=float("-Inf")
        
        for i in range(len(arr)-1,-1,-1):
            if max_a <= arr[i]:
                L.append(arr[i])
                max_a=arr[i]
        L.reverse()
        return L
