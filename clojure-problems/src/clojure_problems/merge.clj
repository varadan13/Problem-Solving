;; (merge l1 l2)

(defn u-merge [arr1 arr2] (into [] (distinct (concat arr1 arr2))))

(defn u-merge-2 [arr1 arr2] (distinct (into arr1 arr2)))