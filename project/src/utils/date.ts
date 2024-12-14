export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function isOverdue(dueDate: string): boolean {
  return new Date(dueDate) < new Date();
}