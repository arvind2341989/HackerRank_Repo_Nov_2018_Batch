{
		        const scoreLength = score.length;

	        	let mostScore = score[0];
	        	let worstScore = score[0];
	        	let mostScoreIncreased = 0;
	        	let worstScoreDecreased = 0;

	            for(let i = 0; i < scoreLength; i++){
	            	const curScore = score[i];

	            	if(mostScore < curScore){
	            		mostScore = curScore;
			            mostScoreIncreased++;
		            }
		            if(worstScore > curScore){
	            		worstScore = curScore;
			            worstScoreDecreased++;
		            }
	            }
	            return [mostScoreIncreased, worstScoreDecreased];
	        }