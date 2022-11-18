(defn natural-numbers
  ([] (natural-numbers 1))
  ([n] (cons n (lazy-seq (natural-numbers (+ n 1))))))

(defn sum [arr] (reduce + arr))
(defn has [arr a] (if (first arr) (if (= (first arr) a) true (has (rest arr) a)) false))

(defn diff [arr1 arr2] (filter #(not (has arr2 %)) arr1))

(defn intersection [arr1 arr2] (filter #(has arr2 %) arr1))

(defn union [arr1 arr2]
  (def diff1 (diff arr1 arr2))
  (def diff2 (diff arr2 arr1))
  (def inter (intersection arr1 arr2))
  (into diff1 (into diff2 inter)))

(defn solution []
  (def thousand (take 100 (natural-numbers)))
  (def threes (filter #(= (mod % 3) 0) thousand))
  (def fives (filter #(= (mod % 5) 0) thousand))
  (sum (union threes fives)))
