;; hobbit data structure
;; hobbit data structure is asymmetric so a function to symmetrise this data structure
;; function that iterates over this data structure to randomly pick a body part


(def asym-hobbit-body-parts
  [{:name "left-eye" :size 1}
   {:name "left-shoulder" :size 3}
   {:name "left-forearm" :size 2}])

(defn matching-part [part]
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
   :size (:size part)})

;; reduce 

;; does it obey the pattern that allows me to use reduce?

;; (reduce + 2 [1 2 3])

(defn symmetrize-body-parts
  [asym-body-parts]
  (let [f #((into %1 (set (%2 (matching-part %2)))))]
    (reduce f [] asym-body-parts)))
