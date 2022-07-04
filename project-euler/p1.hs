solution = sumStep 3 999 + sumStep 5 999 - sumStep 15 999
            where    
                sumStep s n = s * sumOneToN (n `div` s)
                sumOneToN n = n * (n+1) `div` 2

            
