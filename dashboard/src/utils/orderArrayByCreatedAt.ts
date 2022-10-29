export function order(array: []) {
  const sorted = array.sort((a,b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    return dateA.getTime() - dateB.getTime();
  });
  
  return sorted;
} 