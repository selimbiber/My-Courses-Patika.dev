// Create a class HashSet that behaves the same as a HashMap but only contains keys with no values.

class HashSet {
  constructor(capacity) {
    this._loadFactor = 0.75;
    this._buckets = Array(capacity).fill([]);
    this._size = 0;
  }

  stringToNumber(key) {
    const stringKey = key;
    let hashCode = 0;

    const primeNumber = 53;
    for (let i = 0; i < stringKey.length; i++) {
      hashCode = primeNumber * hashCode + stringKey.charCodeAt(i);
    }

    return hashCode;
  }

  getIndexOfKey(key) {
    const bucketIndex = this.stringToNumber(key) % this._buckets.length;

    this.isOutOfBounds(bucketIndex);

    return bucketIndex;
  }

  hasHighLoadFactor() {
    if (this._size / this._buckets.length >= this._loadFactor) {
      this.resize();
    }
  }

  isOutOfBounds(index) {
    if (index < 0 || index >= this._buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  set(key) {
    if (this.has(key)) return;

    const bucketIndex = this.getIndexOfKey(key);
    if (!this._buckets[bucketIndex]) {
      this._buckets[bucketIndex] = [];
    }
    const bucket = this._buckets[bucketIndex];
    for (const entry of bucket) {
      if (entry === key) {
        return;
      }
    }
    bucket.push(key);
    this._size++;

    this.hasHighLoadFactor();
  }

  has(key) {
    const bucketIndex = this.getIndexOfKey(key);
    return this._buckets[bucketIndex] ? this._buckets[bucketIndex].includes(key) : false;
  }

  get(key) {
    const bucketIndex = this.getIndexOfKey(key);
    const bucket = this._buckets[bucketIndex];

    if (!bucket || bucket.length === 0) {
      return undefined;
    }

    for (const entry of bucket) {
      if (entry === key) {
        return entry;
      }
    }
  }

  remove(key) {
    const bucketIndex = this.getIndexOfKey(key);
    this._buckets[bucketIndex] = [];
    this._size--;
    return true;
  }

  clear() {
    this._buckets = Array(this._buckets.length).fill([]);
    this._size = 0;
  }

  resize() {
    const oldBuckets = this._buckets;

    if (!oldBuckets) {
      return;
    }

    this._buckets = Array(this._buckets.length * 2);
    this._size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const entry of bucket) {
          const newIndex = this.getIndexOfKey(entry);
          if (!this._buckets[newIndex]) {
            this._buckets[newIndex] = [];
          }
          this._buckets[newIndex].push(entry);
          this._size++;
        }
      }
    }
  }
}

const firstHashSet = new HashSet(15);

firstHashSet.set("First Key");
firstHashSet.set("Second Key");
firstHashSet.set("Third Key");
firstHashSet.get("First Key"); // First Key
firstHashSet.has("First Key"); // true
firstHashSet.get("Second Key"); // Second Key
firstHashSet.has("Second Key"); // true
firstHashSet.get("Third Key"); // Third Key
firstHashSet.has("Third Key"); // true
firstHashSet.remove("First Key");
firstHashSet.get("First Key"); // undefined
firstHashSet.has("First Key"); // false
firstHashSet.clear();
firstHashSet.get("Second Key"); // undefined
firstHashSet.has("Second Key"); // false
