import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { currencies } from '../constants/currencies';
import { fetchExchangeRates } from '../services/exchangeRates';
import styles from '../styles/App.styles';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('2000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [rates, setRates] = useState({ USD: 1 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadRates = async () => {
      try {
        const currentRates = await fetchExchangeRates();

        if (isMounted) {
          setRates(currentRates);
        }
      } catch (err) {
        if (isMounted) {
          setError('Não foi possível carregar as taxas. Tente novamente mais tarde.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadRates();

    return () => {
      isMounted = false;
    };
  }, []);

  const convertedValue = useMemo(() => {
    const numericAmount = Number.parseFloat(amount) || 0;

    if (!rates[fromCurrency] || !rates[toCurrency]) {
      return 0;
    }

    return (numericAmount / rates[fromCurrency]) * rates[toCurrency];
  }, [amount, fromCurrency, rates, toCurrency]);

  const exchangeRate = useMemo(() => {
    if (!rates[fromCurrency] || !rates[toCurrency]) {
      return 0;
    }

    return rates[toCurrency] / rates[fromCurrency];
  }, [fromCurrency, rates, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.title}>Conversor de Moedas</Text>
          <Text style={styles.subtitle}>Converta valores entre diferentes moedas</Text>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Text style={styles.label}>De:</Text>
          <View style={styles.currencyGrid}>
            {currencies.map((currency) => {
              const isSelected = currency === fromCurrency;

              return (
                <TouchableOpacity
                  key={`from-${currency}`}
                  activeOpacity={0.8}
                  style={[styles.currencyOption, isSelected && styles.currencyOptionSelected]}
                  onPress={() => setFromCurrency(currency)}
                >
                  <Text
                    style={[
                      styles.currencyOptionText,
                      isSelected && styles.currencyOptionTextSelected,
                    ]}
                  >
                    {currency}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.label}>Valor:</Text>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            placeholder="Digite o valor"
            keyboardType="numeric"
            style={styles.input}
          />

          <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
            <Text style={styles.swapText}>⇅</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Para:</Text>
          <View style={styles.currencyGrid}>
            {currencies.map((currency) => {
              const isSelected = currency === toCurrency;

              return (
                <TouchableOpacity
                  key={`to-${currency}`}
                  activeOpacity={0.8}
                  style={[styles.currencyOption, isSelected && styles.currencyOptionSelectedTo]}
                  onPress={() => setToCurrency(currency)}
                >
                  <Text
                    style={[
                      styles.currencyOptionText,
                      isSelected && styles.currencyOptionTextSelectedTo,
                    ]}
                  >
                    {currency}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.convertButton} onPress={() => {}}>
            <Text style={styles.convertButtonText}>Converter</Text>
          </TouchableOpacity>

          {loading ? (
            <ActivityIndicator size="large" color="#60a5fa" style={styles.loader} />
          ) : (
            <>
              <Text style={styles.resultLabel}>Resultado</Text>
              <Text style={styles.resultText}>
                {convertedValue.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: toCurrency,
                })}
              </Text>
              <Text style={styles.exchangeText}>
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}