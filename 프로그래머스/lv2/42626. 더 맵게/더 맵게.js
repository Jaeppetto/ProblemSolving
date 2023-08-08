class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    extractMin() {
        const minValue = this.heap[0];
        const lastValue = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.sinkDown();
        }
        return minValue;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new MinHeap();

    scoville.forEach(value => heap.insert(value));

    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.extractMin();
        const second = heap.extractMin();
        const newScoville = first + second * 2;
        heap.insert(newScoville);
        answer++;
    }

    return heap.peek() >= K ? answer : -1;
}
