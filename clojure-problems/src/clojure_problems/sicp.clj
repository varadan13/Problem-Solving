(defn sum-integers [a b]
  (loop [point a value 0]
    (if (> point b) value
        (recur (+ point 1) (+ value point)))))

(defn sum-cubes [a b]
  (let [cube #(* % % %)]
    (loop [point a value 0]
      (if (> point b) value
          (recur (+ 1 point) (+ value (cube point)))))))


(defn summation [a b update-fun]
  (let [inc #(+ %1 %2)]
    (loop [point a value 0]
      (if (> point b) value
          (recur (inc 1 point) (inc value (update-fun point)))))))


(defn sum-integers-2 [a b]
  (let [identity (fn [x] x)]
    (summation a b identity)))

(defn sum-cubes-2 [a b]
  (let [cube (fn [x] (* x x x))]
    (summation a b cube)))