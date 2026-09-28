import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    color: '#f8fafc',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 18,
  },
  label: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  currencyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  currencyOption: {
    minWidth: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374151',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  currencyOptionSelected: {
    backgroundColor: '#2563eb',
  },
  currencyOptionSelectedTo: {
    backgroundColor: '#16a34a',
  },
  currencyOptionText: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: '700',
  },
  currencyOptionTextSelected: {
    color: '#eff6ff',
  },
  currencyOptionTextSelectedTo: {
    color: '#ecfdf5',
  },
  input: {
    backgroundColor: '#374151',
    borderRadius: 12,
    color: '#f8fafc',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'left',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 18,
  },
  swapButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374151',
    borderRadius: 12,
    width: 56,
    height: 56,
    alignSelf: 'center',
    marginBottom: 18,
  },
  swapText: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '700',
  },
  convertButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginTop: 8,
    marginBottom: 18,
  },
  convertButtonText: {
    color: '#eff6ff',
    fontSize: 18,
    fontWeight: '700',
  },
  resultLabel: {
    color: '#bfdbfe',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  resultText: {
    color: '#f8fafc',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 8,
  },
  exchangeText: {
    color: '#93c5fd',
    fontSize: 14,
    marginBottom: 10,
  },
  loader: {
    marginTop: 18,
  },
  error: {
    backgroundColor: '#7f1d1d',
    borderRadius: 10,
    color: '#fee2e2',
    fontSize: 13,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});

export default styles;